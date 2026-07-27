import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-enforced-server-brazil');
}

export default function NostaltherPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-enforced-server-brazil" />;
}
