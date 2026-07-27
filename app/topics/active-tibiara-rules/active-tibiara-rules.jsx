import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiara-rules');
}

export default function ActiveTibiaraRulesKeywordPage() {
  return <StaticKeywordPage slug="active-tibiara-rules" />;
}
