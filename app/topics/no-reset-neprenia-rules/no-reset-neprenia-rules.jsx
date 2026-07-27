import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-neprenia-rules');
}

export default function NoResetNepreniaRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-neprenia-rules" />;
}
