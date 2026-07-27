import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-13-high-exp-server');
}

export default function Saintsot13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-13-high-exp-server" />;
}
