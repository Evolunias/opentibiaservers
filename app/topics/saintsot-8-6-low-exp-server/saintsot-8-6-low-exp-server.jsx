import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-6-low-exp-server');
}

export default function Saintsot86LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-6-low-exp-server" />;
}
