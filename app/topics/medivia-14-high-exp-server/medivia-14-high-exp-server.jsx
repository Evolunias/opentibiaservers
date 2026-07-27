import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-14-high-exp-server');
}

export default function Medivia14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-14-high-exp-server" />;
}
