import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-10-0-low-exp-server');
}

export default function Shadowcores100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-10-0-low-exp-server" />;
}
