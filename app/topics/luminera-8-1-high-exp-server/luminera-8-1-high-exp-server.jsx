import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-1-high-exp-server');
}

export default function Luminera81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-1-high-exp-server" />;
}
