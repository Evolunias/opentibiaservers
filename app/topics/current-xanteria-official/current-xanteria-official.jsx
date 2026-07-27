import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-xanteria-official');
}

export default function CurrentXanteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-xanteria-official" />;
}
