import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-xanteria-ot');
}

export default function OfficialXanteriaOtKeywordPage() {
  return <StaticKeywordPage slug="official-xanteria-ot" />;
}
