import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-trainers-server-france');
}

export default function DuraOnlineWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-trainers-server-france" />;
}
