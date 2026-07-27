import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-enforced-server-poland');
}

export default function NepreniaPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-enforced-server-poland" />;
}
