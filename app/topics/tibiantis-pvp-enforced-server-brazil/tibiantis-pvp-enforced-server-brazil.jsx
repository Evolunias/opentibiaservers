import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-enforced-server-brazil');
}

export default function TibiantisPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-enforced-server-brazil" />;
}
