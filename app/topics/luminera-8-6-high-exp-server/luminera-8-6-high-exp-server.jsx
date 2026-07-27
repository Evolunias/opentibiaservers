import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-6-high-exp-server');
}

export default function Luminera86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-6-high-exp-server" />;
}
