import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-11-low-exp-server');
}

export default function Medivia11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-11-low-exp-server" />;
}
