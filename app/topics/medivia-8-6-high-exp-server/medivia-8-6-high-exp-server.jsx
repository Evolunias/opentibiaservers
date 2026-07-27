import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-6-high-exp-server');
}

export default function Medivia86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-6-high-exp-server" />;
}
