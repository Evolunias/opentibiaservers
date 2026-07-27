import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-9-6-high-exp-server');
}

export default function Luminera96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-9-6-high-exp-server" />;
}
