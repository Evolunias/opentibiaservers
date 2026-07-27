import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-54-high-exp-server');
}

export default function Luminera854HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-54-high-exp-server" />;
}
