import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-12-high-exp-server');
}

export default function Medivia12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-12-high-exp-server" />;
}
