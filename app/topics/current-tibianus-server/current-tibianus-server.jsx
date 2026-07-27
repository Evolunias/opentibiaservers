import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibianus-server');
}

export default function CurrentTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="current-tibianus-server" />;
}
