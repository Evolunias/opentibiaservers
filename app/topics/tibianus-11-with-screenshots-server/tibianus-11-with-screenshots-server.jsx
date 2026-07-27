import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-11-with-screenshots-server');
}

export default function Tibianus11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-11-with-screenshots-server" />;
}
