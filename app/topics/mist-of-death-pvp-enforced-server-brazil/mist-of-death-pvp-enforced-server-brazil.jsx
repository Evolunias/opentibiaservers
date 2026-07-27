import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvp-enforced-server-brazil');
}

export default function MistOfDeathPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvp-enforced-server-brazil" />;
}
