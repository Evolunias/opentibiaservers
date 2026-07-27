import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-rules');
}

export default function BlazeraRulesKeywordPage() {
  return <StaticKeywordPage slug="blazera-rules" />;
}
