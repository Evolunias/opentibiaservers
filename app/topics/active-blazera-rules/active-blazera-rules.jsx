import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-blazera-rules');
}

export default function ActiveBlazeraRulesKeywordPage() {
  return <StaticKeywordPage slug="active-blazera-rules" />;
}
