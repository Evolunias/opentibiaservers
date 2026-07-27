import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-enforced-server-mexico');
}

export default function NepreniaPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-enforced-server-mexico" />;
}
