import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-72-high-exp-server');
}

export default function Tibianus772HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-72-high-exp-server" />;
}
