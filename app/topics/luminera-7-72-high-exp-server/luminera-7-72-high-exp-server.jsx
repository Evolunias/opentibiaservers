import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-72-high-exp-server');
}

export default function Luminera772HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-72-high-exp-server" />;
}
