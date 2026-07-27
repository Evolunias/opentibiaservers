import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-ot-server-europe');
}

export default function HighExpOtServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="high-exp-ot-server-europe" />;
}
