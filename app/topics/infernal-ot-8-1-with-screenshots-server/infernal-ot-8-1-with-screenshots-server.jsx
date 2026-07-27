import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-1-with-screenshots-server');
}

export default function InfernalOt81WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-1-with-screenshots-server" />;
}
