import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eldera-server');
}

export default function OfficialElderaServerKeywordPage() {
  return <StaticKeywordPage slug="official-eldera-server" />;
}
