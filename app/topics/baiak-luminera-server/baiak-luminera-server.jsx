import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-luminera-server');
}

export default function BaiakLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-luminera-server" />;
}
