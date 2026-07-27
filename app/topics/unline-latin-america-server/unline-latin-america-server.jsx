import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-latin-america-server');
}

export default function UnlineLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="unline-latin-america-server" />;
}
