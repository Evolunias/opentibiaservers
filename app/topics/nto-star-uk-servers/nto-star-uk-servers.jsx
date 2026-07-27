import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-uk-servers');
}

export default function NtoStarUkServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-uk-servers" />;
}
