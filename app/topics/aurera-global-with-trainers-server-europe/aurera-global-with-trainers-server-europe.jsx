import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-trainers-server-europe');
}

export default function AureraGlobalWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-trainers-server-europe" />;
}
