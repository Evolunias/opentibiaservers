import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-high-exp-server-north-america');
}

export default function ArchlightHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-high-exp-server-north-america" />;
}
