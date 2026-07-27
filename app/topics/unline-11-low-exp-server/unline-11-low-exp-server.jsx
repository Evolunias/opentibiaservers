import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-11-low-exp-server');
}

export default function Unline11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-11-low-exp-server" />;
}
