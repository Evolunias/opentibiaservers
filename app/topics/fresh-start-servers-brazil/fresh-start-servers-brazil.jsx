import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-servers-brazil');
}

export default function FreshStartServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-servers-brazil" />;
}
