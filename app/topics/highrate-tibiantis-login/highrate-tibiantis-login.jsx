import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiantis-login');
}

export default function HighrateTibiantisLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiantis-login" />;
}
