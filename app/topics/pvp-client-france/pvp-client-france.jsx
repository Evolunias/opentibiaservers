import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-client-france');
}

export default function PvpClientFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-client-france" />;
}
