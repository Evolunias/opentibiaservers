import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-11-low-exp-server');
}

export default function Thaisot11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-11-low-exp-server" />;
}
