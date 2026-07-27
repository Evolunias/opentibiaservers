import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-6-with-screenshots-server');
}

export default function Shadowcores76WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-6-with-screenshots-server" />;
}
