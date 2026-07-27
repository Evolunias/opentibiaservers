import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-14-with-screenshots-server');
}

export default function InfernalOt14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-14-with-screenshots-server" />;
}
