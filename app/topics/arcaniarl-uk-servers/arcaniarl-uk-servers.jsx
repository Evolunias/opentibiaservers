import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-uk-servers');
}

export default function ArcaniarlUkServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-uk-servers" />;
}
