import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-wars');
}

export default function TibianusWarsKeywordPage() {
  return <StaticKeywordPage slug="tibianus-wars" />;
}
