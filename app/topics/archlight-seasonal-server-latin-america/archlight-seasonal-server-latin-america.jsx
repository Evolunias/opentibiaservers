import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-seasonal-server-latin-america');
}

export default function ArchlightSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-seasonal-server-latin-america" />;
}
