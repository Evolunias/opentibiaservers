import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-0-high-exp-server');
}

export default function Saintsot80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-0-high-exp-server" />;
}
