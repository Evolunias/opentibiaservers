import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-4-low-exp-server');
}

export default function Medivia84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-4-low-exp-server" />;
}
