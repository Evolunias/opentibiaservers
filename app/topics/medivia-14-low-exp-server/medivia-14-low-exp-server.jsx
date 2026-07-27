import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-14-low-exp-server');
}

export default function Medivia14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-14-low-exp-server" />;
}
