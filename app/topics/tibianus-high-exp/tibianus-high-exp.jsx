import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-high-exp');
}

export default function TibianusHighExpKeywordPage() {
  return <StaticKeywordPage slug="tibianus-high-exp" />;
}
