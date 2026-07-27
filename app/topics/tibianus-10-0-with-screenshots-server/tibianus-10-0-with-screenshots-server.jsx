import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-0-with-screenshots-server');
}

export default function Tibianus100WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-0-with-screenshots-server" />;
}
