import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-usa-servers');
}

export default function UnlineUsaServersKeywordPage() {
  return <StaticKeywordPage slug="unline-usa-servers" />;
}
