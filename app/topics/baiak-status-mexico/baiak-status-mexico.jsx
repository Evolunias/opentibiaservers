import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-status-mexico');
}

export default function BaiakStatusMexicoKeywordPage() {
  return <StaticKeywordPage slug="baiak-status-mexico" />;
}
