import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-argentina');
}

export default function FreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-argentina" />;
}
