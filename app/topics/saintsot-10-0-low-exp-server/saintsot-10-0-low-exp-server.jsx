import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-10-0-low-exp-server');
}

export default function Saintsot100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-10-0-low-exp-server" />;
}
