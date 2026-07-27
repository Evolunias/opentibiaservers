import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-6-low-exp-server');
}

export default function Medivia86LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-6-low-exp-server" />;
}
