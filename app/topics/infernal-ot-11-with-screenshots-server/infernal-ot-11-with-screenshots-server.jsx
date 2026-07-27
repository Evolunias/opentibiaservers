import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-11-with-screenshots-server');
}

export default function InfernalOt11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-11-with-screenshots-server" />;
}
