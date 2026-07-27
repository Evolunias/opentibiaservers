import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-4-with-screenshots-server');
}

export default function Tibianus74WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-4-with-screenshots-server" />;
}
