import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-uk-server');
}

export default function ArcaniarlUkServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-uk-server" />;
}
