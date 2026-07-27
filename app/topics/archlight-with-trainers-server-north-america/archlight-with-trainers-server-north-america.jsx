import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-trainers-server-north-america');
}

export default function ArchlightWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-trainers-server-north-america" />;
}
