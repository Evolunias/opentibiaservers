import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-client-south-america');
}

export default function PvpClientSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-client-south-america" />;
}
