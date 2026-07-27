import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-wiki-france');
}

export default function PvpeWikiFranceKeywordPage() {
  return <StaticKeywordPage slug="pvpe-wiki-france" />;
}
