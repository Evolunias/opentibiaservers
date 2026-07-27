import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-high-exp-server-france');
}

export default function ArchlightHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="archlight-high-exp-server-france" />;
}
