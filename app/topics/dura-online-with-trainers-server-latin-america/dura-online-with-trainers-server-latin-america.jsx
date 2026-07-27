import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-trainers-server-latin-america');
}

export default function DuraOnlineWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-trainers-server-latin-america" />;
}
