import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-xanteria-official');
}

export default function LowrateXanteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-xanteria-official" />;
}
