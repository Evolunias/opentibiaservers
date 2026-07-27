import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-4-high-exp-server');
}

export default function Unline84HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-4-high-exp-server" />;
}
