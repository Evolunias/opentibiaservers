import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-12-low-exp-server');
}

export default function Medivia12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-12-low-exp-server" />;
}
