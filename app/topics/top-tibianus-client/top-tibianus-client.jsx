import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibianus-client');
}

export default function TopTibianusClientKeywordPage() {
  return <StaticKeywordPage slug="top-tibianus-client" />;
}
