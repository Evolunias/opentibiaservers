import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-12-with-screenshots-server');
}

export default function Tibianus12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-12-with-screenshots-server" />;
}
