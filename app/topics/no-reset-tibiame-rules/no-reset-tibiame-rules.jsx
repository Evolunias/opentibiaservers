import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiame-rules');
}

export default function NoResetTibiameRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiame-rules" />;
}
