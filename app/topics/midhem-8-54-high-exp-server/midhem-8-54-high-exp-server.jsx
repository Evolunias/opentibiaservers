import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-54-high-exp-server');
}

export default function Midhem854HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-54-high-exp-server" />;
}
