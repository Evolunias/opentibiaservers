import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-poland-servers');
}

export default function NtoStarPolandServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-poland-servers" />;
}
