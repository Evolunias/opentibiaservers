import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-noxiousot-server');
}

export default function NonPvpNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-noxiousot-server" />;
}
