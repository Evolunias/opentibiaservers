import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-high-exp-server-europe');
}

export default function UnlineHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="unline-high-exp-server-europe" />;
}
