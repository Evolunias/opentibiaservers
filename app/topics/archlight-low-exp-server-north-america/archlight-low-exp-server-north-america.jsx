import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-low-exp-server-north-america');
}

export default function ArchlightLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-low-exp-server-north-america" />;
}
