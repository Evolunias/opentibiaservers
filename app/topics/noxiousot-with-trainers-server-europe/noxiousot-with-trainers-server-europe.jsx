import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-with-trainers-server-europe');
}

export default function NoxiousotWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-with-trainers-server-europe" />;
}
