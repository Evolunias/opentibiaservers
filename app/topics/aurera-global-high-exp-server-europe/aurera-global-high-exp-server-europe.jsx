import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-high-exp-server-europe');
}

export default function AureraGlobalHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-high-exp-server-europe" />;
}
