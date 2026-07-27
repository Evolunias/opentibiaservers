import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-trainers-server-chile');
}

export default function DuraOnlineWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-trainers-server-chile" />;
}
