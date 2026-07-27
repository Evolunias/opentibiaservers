import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-xanteria-rules');
}

export default function NoResetXanteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-xanteria-rules" />;
}
