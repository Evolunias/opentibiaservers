import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-trainers-server-chile');
}

export default function ArchlightWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-trainers-server-chile" />;
}
