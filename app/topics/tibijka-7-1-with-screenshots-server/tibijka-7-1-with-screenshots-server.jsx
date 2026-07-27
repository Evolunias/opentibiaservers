import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-1-with-screenshots-server');
}

export default function Tibijka71WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-1-with-screenshots-server" />;
}
