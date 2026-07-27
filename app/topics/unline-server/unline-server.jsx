import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-server');
}

export default function UnlineServerKeywordPage() {
  return <StaticKeywordPage slug="unline-server" />;
}
