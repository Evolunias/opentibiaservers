import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-9-6-low-exp-server');
}

export default function Unline96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-9-6-low-exp-server" />;
}
