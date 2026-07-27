import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-xanteria-rules');
}

export default function ActiveXanteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="active-xanteria-rules" />;
}
