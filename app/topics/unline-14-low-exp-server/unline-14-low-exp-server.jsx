import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-14-low-exp-server');
}

export default function Unline14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-14-low-exp-server" />;
}
