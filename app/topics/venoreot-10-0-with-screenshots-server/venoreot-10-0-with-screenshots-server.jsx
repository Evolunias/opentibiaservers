import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-10-0-with-screenshots-server');
}

export default function Venoreot100WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-10-0-with-screenshots-server" />;
}
