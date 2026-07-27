import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('iridia-server');
}

export default function IridiaServerKeywordPage() {
  return <StaticKeywordPage slug="iridia-server" />;
}
