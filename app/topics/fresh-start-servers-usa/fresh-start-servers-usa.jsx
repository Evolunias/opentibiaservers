import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-servers-usa');
}

export default function FreshStartServersUsaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-servers-usa" />;
}
