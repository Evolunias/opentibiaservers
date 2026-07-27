import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-coxaot-rules');
}

export default function CustomCoxaotRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-coxaot-rules" />;
}
