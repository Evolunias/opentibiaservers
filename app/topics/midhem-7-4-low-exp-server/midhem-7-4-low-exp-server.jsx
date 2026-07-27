import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-4-low-exp-server');
}

export default function Midhem74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-4-low-exp-server" />;
}
