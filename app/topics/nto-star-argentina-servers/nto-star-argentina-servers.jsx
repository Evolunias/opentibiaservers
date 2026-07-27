import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-argentina-servers');
}

export default function NtoStarArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-argentina-servers" />;
}
