import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-0-low-exp-server');
}

export default function Realesta100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-0-low-exp-server" />;
}
