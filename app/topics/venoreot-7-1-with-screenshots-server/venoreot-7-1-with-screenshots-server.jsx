import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-1-with-screenshots-server');
}

export default function Venoreot71WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-1-with-screenshots-server" />;
}
