import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-client-germany');
}

export default function NonPvpClientGermanyKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-client-germany" />;
}
