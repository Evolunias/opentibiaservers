import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-14-low-exp-server');
}

export default function Midhem14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-14-low-exp-server" />;
}
