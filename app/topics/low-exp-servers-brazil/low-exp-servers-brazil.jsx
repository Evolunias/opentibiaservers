import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-servers-brazil');
}

export default function LowExpServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="low-exp-servers-brazil" />;
}
