import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-high-exp');
}

export default function BlazeraHighExpKeywordPage() {
  return <StaticKeywordPage slug="blazera-high-exp" />;
}
