import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-usa');
}

export default function FreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-usa" />;
}
