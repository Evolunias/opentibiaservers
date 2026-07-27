import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-usa-server');
}

export default function UnlineUsaServerKeywordPage() {
  return <StaticKeywordPage slug="unline-usa-server" />;
}
