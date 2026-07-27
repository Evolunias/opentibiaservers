import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-low-exp-server-usa');
}

export default function ArchlightLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="archlight-low-exp-server-usa" />;
}
