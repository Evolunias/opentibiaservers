import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-6-with-screenshots-server');
}

export default function Shadowcores86WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-6-with-screenshots-server" />;
}
