import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-12-low-exp-server');
}

export default function Blazera12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-12-low-exp-server" />;
}
