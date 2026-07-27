import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realesta');
}

export default function OfficialRealestaKeywordPage() {
  return <StaticKeywordPage slug="official-realesta" />;
}
