import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-xanteria-rules');
}

export default function CustomXanteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-xanteria-rules" />;
}
