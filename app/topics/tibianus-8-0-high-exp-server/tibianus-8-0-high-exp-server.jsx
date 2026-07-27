import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-0-high-exp-server');
}

export default function Tibianus80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-0-high-exp-server" />;
}
