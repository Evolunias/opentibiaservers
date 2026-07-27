import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-15-low-exp-server');
}

export default function Medivia15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-15-low-exp-server" />;
}
