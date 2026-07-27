import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-15-with-screenshots-server');
}

export default function Shadowcores15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-15-with-screenshots-server" />;
}
