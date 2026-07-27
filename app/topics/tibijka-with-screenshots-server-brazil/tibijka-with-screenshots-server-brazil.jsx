import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-screenshots-server-brazil');
}

export default function TibijkaWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-screenshots-server-brazil" />;
}
