import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-sweden-servers');
}

export default function NtoStarSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-sweden-servers" />;
}
