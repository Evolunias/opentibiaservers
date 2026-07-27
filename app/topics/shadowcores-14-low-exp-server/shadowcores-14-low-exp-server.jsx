import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-14-low-exp-server');
}

export default function Shadowcores14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-14-low-exp-server" />;
}
