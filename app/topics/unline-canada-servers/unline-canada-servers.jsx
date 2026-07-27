import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-canada-servers');
}

export default function UnlineCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="unline-canada-servers" />;
}
