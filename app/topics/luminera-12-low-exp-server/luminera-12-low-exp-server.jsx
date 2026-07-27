import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-12-low-exp-server');
}

export default function Luminera12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-12-low-exp-server" />;
}
