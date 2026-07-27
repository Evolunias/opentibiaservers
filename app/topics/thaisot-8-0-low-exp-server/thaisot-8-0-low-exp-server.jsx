import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-0-low-exp-server');
}

export default function Thaisot80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-0-low-exp-server" />;
}
