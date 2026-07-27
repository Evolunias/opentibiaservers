import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-11-high-exp-server');
}

export default function Unline11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-11-high-exp-server" />;
}
