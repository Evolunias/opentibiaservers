import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-10-0-low-exp-server');
}

export default function Thaisot100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-10-0-low-exp-server" />;
}
