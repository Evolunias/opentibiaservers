import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-low-exp-server-brazil');
}

export default function ArchlightLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="archlight-low-exp-server-brazil" />;
}
