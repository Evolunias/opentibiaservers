import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-11-with-screenshots-server');
}

export default function Shadowcores11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-11-with-screenshots-server" />;
}
