import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-client-brazil');
}

export default function NonPvpClientBrazilKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-client-brazil" />;
}
