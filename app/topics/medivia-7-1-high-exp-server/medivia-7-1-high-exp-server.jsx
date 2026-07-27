import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-1-high-exp-server');
}

export default function Medivia71HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-1-high-exp-server" />;
}
