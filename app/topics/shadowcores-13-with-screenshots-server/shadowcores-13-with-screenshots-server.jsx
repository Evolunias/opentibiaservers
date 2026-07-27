import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-13-with-screenshots-server');
}

export default function Shadowcores13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-13-with-screenshots-server" />;
}
