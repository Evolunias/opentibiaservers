import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-usa-servers');
}

export default function NtoStarUsaServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-usa-servers" />;
}
