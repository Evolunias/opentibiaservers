import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiame-ots');
}

export default function OfficialTibiameOtsKeywordPage() {
  return <StaticKeywordPage slug="official-tibiame-ots" />;
}
