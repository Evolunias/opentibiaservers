import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-10-0-with-screenshots-server');
}

export default function Shadowcores100WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-10-0-with-screenshots-server" />;
}
