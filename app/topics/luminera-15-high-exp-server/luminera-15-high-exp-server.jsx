import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-15-high-exp-server');
}

export default function Luminera15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-15-high-exp-server" />;
}
