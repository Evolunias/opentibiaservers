import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-client-south-america');
}

export default function NonPvpClientSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-client-south-america" />;
}
