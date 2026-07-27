import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibianus-server');
}

export default function LowrateTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibianus-server" />;
}
