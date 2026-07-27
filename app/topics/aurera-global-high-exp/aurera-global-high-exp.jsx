import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-high-exp');
}

export default function AureraGlobalHighExpKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-high-exp" />;
}
