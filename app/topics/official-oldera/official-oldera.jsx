import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oldera');
}

export default function OfficialOlderaKeywordPage() {
  return <StaticKeywordPage slug="official-oldera" />;
}
