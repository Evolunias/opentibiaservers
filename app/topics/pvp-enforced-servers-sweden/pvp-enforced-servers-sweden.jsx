import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-servers-sweden');
}

export default function PvpEnforcedServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-servers-sweden" />;
}
