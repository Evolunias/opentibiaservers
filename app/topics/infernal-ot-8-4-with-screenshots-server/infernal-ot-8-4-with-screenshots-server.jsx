import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-4-with-screenshots-server');
}

export default function InfernalOt84WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-4-with-screenshots-server" />;
}
