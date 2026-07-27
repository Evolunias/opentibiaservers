import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-players-online-france');
}

export default function BaiakPlayersOnlineFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-players-online-france" />;
}
