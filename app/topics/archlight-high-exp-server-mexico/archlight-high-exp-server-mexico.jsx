import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-high-exp-server-mexico');
}

export default function ArchlightHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="archlight-high-exp-server-mexico" />;
}
