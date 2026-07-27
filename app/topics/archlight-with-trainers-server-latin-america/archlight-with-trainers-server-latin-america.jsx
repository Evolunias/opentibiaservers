import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-trainers-server-latin-america');
}

export default function ArchlightWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-trainers-server-latin-america" />;
}
