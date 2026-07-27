import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-13-high-exp-server');
}

export default function Unline13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-13-high-exp-server" />;
}
