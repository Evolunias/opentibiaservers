import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-9-6-with-screenshots-server');
}

export default function Tibianus96WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-9-6-with-screenshots-server" />;
}
