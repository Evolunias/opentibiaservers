import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eldera-server');
}

export default function TopElderaServerKeywordPage() {
  return <StaticKeywordPage slug="top-eldera-server" />;
}
