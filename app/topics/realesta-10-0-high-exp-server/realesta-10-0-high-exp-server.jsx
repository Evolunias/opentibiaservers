import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-0-high-exp-server');
}

export default function Realesta100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-0-high-exp-server" />;
}
