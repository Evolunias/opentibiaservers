import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-10-98-high-exp-server');
}

export default function Tibijka1098HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-10-98-high-exp-server" />;
}
