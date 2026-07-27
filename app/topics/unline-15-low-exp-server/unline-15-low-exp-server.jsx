import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-15-low-exp-server');
}

export default function Unline15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-15-low-exp-server" />;
}
