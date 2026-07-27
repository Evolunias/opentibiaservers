import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-4-high-exp-server');
}

export default function Medivia84HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-4-high-exp-server" />;
}
