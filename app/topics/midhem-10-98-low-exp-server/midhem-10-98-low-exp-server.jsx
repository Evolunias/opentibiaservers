import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-10-98-low-exp-server');
}

export default function Midhem1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-10-98-low-exp-server" />;
}
