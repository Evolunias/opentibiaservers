import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-11-low-exp-server');
}

export default function Saintsot11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-11-low-exp-server" />;
}
