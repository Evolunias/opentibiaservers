import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-trainers-server-france');
}

export default function ArchlightWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-trainers-server-france" />;
}
