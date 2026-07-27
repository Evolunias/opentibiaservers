import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-non-pvp-server-poland');
}

export default function NoxiousotNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-non-pvp-server-poland" />;
}
