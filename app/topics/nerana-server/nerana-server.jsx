import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nerana-server');
}

export default function NeranaServerKeywordPage() {
  return <StaticKeywordPage slug="nerana-server" />;
}
