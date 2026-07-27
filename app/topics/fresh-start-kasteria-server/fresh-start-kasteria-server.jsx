import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-kasteria-server');
}

export default function FreshStartKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-kasteria-server" />;
}
