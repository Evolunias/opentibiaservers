import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-uk-server');
}

export default function NtoStarUkServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-uk-server" />;
}
