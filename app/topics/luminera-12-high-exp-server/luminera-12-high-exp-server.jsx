import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-12-high-exp-server');
}

export default function Luminera12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-12-high-exp-server" />;
}
