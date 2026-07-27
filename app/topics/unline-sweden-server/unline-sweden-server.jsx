import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-sweden-server');
}

export default function UnlineSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="unline-sweden-server" />;
}
