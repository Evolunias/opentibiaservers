import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-latin-america-servers');
}

export default function UnlineLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="unline-latin-america-servers" />;
}
