import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiascape-ot');
}

export default function OfficialTibiascapeOtKeywordPage() {
  return <StaticKeywordPage slug="official-tibiascape-ot" />;
}
