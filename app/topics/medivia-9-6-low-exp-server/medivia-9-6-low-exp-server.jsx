import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-9-6-low-exp-server');
}

export default function Medivia96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-9-6-low-exp-server" />;
}
