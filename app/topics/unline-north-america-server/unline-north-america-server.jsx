import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-north-america-server');
}

export default function UnlineNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="unline-north-america-server" />;
}
