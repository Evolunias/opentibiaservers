import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-0-high-exp-server');
}

export default function Medivia100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-0-high-exp-server" />;
}
