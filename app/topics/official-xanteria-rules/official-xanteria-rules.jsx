import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-xanteria-rules');
}

export default function OfficialXanteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="official-xanteria-rules" />;
}
