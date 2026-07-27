import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-xanteria-official');
}

export default function HighrateXanteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-xanteria-official" />;
}
