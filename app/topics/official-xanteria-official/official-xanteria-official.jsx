import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-xanteria-official');
}

export default function OfficialXanteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-xanteria-official" />;
}
