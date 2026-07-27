import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-54-low-exp-server');
}

export default function Midhem854LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-54-low-exp-server" />;
}
