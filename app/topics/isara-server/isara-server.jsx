import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('isara-server');
}

export default function IsaraServerKeywordPage() {
  return <StaticKeywordPage slug="isara-server" />;
}
