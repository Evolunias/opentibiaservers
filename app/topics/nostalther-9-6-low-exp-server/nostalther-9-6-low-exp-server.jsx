import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-9-6-low-exp-server');
}

export default function Nostalther96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-9-6-low-exp-server" />;
}
