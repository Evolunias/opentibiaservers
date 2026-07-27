import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-0-with-screenshots-server');
}

export default function InfernalOt80WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-0-with-screenshots-server" />;
}
