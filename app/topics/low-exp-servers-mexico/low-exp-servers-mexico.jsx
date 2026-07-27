import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-servers-mexico');
}

export default function LowExpServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="low-exp-servers-mexico" />;
}
