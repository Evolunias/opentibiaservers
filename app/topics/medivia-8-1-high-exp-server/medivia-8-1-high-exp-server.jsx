import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-1-high-exp-server');
}

export default function Medivia81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-1-high-exp-server" />;
}
