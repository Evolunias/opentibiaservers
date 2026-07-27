import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-high-exp');
}

export default function UnlineHighExpKeywordPage() {
  return <StaticKeywordPage slug="unline-high-exp" />;
}
