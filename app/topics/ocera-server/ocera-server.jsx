import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ocera-server');
}

export default function OceraServerKeywordPage() {
  return <StaticKeywordPage slug="ocera-server" />;
}
