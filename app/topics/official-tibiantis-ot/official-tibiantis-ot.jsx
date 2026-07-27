import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiantis-ot');
}

export default function OfficialTibiantisOtKeywordPage() {
  return <StaticKeywordPage slug="official-tibiantis-ot" />;
}
