import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-12-low-exp-server');
}

export default function Saintsot12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-12-low-exp-server" />;
}
