import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-6-low-exp-server');
}

export default function Shadowcores86LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-6-low-exp-server" />;
}
