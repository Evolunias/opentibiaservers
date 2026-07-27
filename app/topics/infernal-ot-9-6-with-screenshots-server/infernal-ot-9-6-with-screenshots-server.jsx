import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-9-6-with-screenshots-server');
}

export default function InfernalOt96WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-9-6-with-screenshots-server" />;
}
