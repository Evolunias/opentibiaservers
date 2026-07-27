import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiascape');
}

export default function HighrateTibiascapeKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiascape" />;
}
