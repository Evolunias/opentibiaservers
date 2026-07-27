import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-seasonal-server-latin-america');
}

export default function DuraOnlineSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-seasonal-server-latin-america" />;
}
