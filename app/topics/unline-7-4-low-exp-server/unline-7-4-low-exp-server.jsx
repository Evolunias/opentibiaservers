import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-4-low-exp-server');
}

export default function Unline74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-7-4-low-exp-server" />;
}
