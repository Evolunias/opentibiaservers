import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-north-america-servers');
}

export default function UnlineNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="unline-north-america-servers" />;
}
