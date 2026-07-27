import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-14-with-screenshots-server');
}

export default function Shadowcores14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-14-with-screenshots-server" />;
}
