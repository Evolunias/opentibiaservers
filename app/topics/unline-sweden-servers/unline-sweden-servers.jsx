import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-sweden-servers');
}

export default function UnlineSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="unline-sweden-servers" />;
}
