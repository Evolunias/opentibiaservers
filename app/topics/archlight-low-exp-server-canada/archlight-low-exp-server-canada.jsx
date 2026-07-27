import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-low-exp-server-canada');
}

export default function ArchlightLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="archlight-low-exp-server-canada" />;
}
