import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-xanteria-ots');
}

export default function OfficialXanteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="official-xanteria-ots" />;
}
