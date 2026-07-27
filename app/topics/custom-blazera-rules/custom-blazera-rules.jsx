import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-blazera-rules');
}

export default function CustomBlazeraRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-blazera-rules" />;
}
