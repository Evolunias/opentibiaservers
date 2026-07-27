import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiame');
}

export default function OfficialTibiameKeywordPage() {
  return <StaticKeywordPage slug="official-tibiame" />;
}
