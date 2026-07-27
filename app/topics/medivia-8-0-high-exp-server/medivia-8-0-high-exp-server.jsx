import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-0-high-exp-server');
}

export default function Medivia80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-0-high-exp-server" />;
}
