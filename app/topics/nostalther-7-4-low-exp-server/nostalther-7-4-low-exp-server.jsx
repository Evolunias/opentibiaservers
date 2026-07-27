import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-4-low-exp-server');
}

export default function Nostalther74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-4-low-exp-server" />;
}
