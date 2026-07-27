import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-14-high-exp-server');
}

export default function Saintsot14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-14-high-exp-server" />;
}
