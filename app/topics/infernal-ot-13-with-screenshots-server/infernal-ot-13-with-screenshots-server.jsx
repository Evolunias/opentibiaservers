import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-13-with-screenshots-server');
}

export default function InfernalOt13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-13-with-screenshots-server" />;
}
