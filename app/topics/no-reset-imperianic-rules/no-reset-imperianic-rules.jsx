import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-imperianic-rules');
}

export default function NoResetImperianicRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-imperianic-rules" />;
}
