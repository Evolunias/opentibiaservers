import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-0-low-exp-server');
}

export default function Kasteria80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-0-low-exp-server" />;
}
