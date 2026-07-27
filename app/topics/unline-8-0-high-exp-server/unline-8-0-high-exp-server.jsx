import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-0-high-exp-server');
}

export default function Unline80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-0-high-exp-server" />;
}
