import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-client-europe');
}

export default function NonPvpClientEuropeKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-client-europe" />;
}
