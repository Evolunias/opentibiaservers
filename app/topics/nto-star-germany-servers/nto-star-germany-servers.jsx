import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-germany-servers');
}

export default function NtoStarGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-germany-servers" />;
}
