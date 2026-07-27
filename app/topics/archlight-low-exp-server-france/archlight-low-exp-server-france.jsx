import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-low-exp-server-france');
}

export default function ArchlightLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="archlight-low-exp-server-france" />;
}
