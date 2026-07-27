import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-9-6-high-exp-server');
}

export default function Medivia96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-9-6-high-exp-server" />;
}
