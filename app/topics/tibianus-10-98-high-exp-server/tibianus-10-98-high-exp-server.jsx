import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-98-high-exp-server');
}

export default function Tibianus1098HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-98-high-exp-server" />;
}
