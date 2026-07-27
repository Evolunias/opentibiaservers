import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-15-high-exp-server');
}

export default function Unline15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-15-high-exp-server" />;
}
