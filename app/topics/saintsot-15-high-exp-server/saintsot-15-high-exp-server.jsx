import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-15-high-exp-server');
}

export default function Saintsot15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-15-high-exp-server" />;
}
