import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-11-low-exp-server');
}

export default function Midhem11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-11-low-exp-server" />;
}
