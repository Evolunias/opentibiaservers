import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-trainers-server-north-america');
}

export default function DuraOnlineWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-trainers-server-north-america" />;
}
