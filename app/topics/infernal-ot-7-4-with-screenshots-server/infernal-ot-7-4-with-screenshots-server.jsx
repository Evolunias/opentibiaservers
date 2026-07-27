import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-4-with-screenshots-server');
}

export default function InfernalOt74WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-4-with-screenshots-server" />;
}
