import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-4-low-exp-server');
}

export default function Shadowcores74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-4-low-exp-server" />;
}
