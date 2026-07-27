import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-tibiantis-server');
}

export default function LowExpTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-tibiantis-server" />;
}
