import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-screenshots');
}

export default function TibiantisScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-screenshots" />;
}
