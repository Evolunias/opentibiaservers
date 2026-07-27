import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-14-low-exp-server');
}

export default function Saintsot14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-14-low-exp-server" />;
}
