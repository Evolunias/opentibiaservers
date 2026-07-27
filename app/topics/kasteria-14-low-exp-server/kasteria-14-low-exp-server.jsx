import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-14-low-exp-server');
}

export default function Kasteria14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-14-low-exp-server" />;
}
