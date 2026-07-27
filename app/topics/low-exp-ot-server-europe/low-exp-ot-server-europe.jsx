import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-ot-server-europe');
}

export default function LowExpOtServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="low-exp-ot-server-europe" />;
}
