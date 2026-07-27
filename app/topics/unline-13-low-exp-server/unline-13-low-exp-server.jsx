import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-13-low-exp-server');
}

export default function Unline13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-13-low-exp-server" />;
}
