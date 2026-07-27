import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-screenshots-server-brazil');
}

export default function TibiantisWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-screenshots-server-brazil" />;
}
