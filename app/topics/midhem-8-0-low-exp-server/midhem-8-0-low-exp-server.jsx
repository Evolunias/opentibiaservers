import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-0-low-exp-server');
}

export default function Midhem80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-0-low-exp-server" />;
}
