import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-low-exp-server-europe');
}

export default function OxygenotLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-low-exp-server-europe" />;
}
