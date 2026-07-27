import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-high-exp-server-brazil');
}

export default function ArchlightHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="archlight-high-exp-server-brazil" />;
}
