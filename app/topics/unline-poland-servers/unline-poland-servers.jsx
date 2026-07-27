import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-poland-servers');
}

export default function UnlinePolandServersKeywordPage() {
  return <StaticKeywordPage slug="unline-poland-servers" />;
}
