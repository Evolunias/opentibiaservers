import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-6-low-exp-server');
}

export default function Shadowcores76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-6-low-exp-server" />;
}
