import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-login');
}

export default function ArcaniarlLoginKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-login" />;
}
