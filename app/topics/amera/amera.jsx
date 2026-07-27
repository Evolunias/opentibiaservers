import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('amera');
}

export default function AmeraKeywordPage() {
  return <StaticKeywordPage slug="amera" />;
}
