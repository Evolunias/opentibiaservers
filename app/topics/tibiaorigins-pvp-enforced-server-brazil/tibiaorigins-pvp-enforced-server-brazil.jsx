import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvp-enforced-server-brazil');
}

export default function TibiaoriginsPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvp-enforced-server-brazil" />;
}
