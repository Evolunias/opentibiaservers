import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-1-high-exp-server');
}

export default function Luminera71HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-1-high-exp-server" />;
}
