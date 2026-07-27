import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-54-low-exp-server');
}

export default function Thornia854LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-54-low-exp-server" />;
}
