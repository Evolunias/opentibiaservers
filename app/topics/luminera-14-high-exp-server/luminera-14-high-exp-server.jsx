import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-14-high-exp-server');
}

export default function Luminera14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-14-high-exp-server" />;
}
