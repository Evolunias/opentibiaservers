import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-low-exp-server-brazil');
}

export default function NostaltherLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nostalther-low-exp-server-brazil" />;
}
