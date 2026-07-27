import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-15-high-exp-server');
}

export default function Medivia15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-15-high-exp-server" />;
}
