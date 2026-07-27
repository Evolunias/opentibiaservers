import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-noxiousot-rules');
}

export default function NoResetNoxiousotRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-noxiousot-rules" />;
}
