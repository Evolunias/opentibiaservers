import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-1-with-screenshots-server');
}

export default function Tibianus81WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-1-with-screenshots-server" />;
}
