import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-1-low-exp-server');
}

export default function Midhem81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-1-low-exp-server" />;
}
