import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-high-exp-server-brazil');
}

export default function NostaltherHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nostalther-high-exp-server-brazil" />;
}
