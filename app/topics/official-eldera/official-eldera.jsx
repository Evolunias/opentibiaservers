import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eldera');
}

export default function OfficialElderaKeywordPage() {
  return <StaticKeywordPage slug="official-eldera" />;
}
