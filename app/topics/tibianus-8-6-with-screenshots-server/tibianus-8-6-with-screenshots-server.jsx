import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-6-with-screenshots-server');
}

export default function Tibianus86WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-6-with-screenshots-server" />;
}
