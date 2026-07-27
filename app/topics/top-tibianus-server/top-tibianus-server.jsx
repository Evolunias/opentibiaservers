import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibianus-server');
}

export default function TopTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="top-tibianus-server" />;
}
