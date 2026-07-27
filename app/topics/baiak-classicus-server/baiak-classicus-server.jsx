import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-classicus-server');
}

export default function BaiakClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-classicus-server" />;
}
