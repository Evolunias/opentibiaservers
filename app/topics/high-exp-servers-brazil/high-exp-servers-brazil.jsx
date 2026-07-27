import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-servers-brazil');
}

export default function HighExpServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="high-exp-servers-brazil" />;
}
