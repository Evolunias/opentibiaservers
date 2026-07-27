import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-poland-server');
}

export default function UnlinePolandServerKeywordPage() {
  return <StaticKeywordPage slug="unline-poland-server" />;
}
