import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiame-ot');
}

export default function OfficialTibiameOtKeywordPage() {
  return <StaticKeywordPage slug="official-tibiame-ot" />;
}
