import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-13-high-exp-server');
}

export default function Luminera13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-13-high-exp-server" />;
}
