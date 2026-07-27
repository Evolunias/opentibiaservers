import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-trainers-server-europe');
}

export default function OxygenotWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-trainers-server-europe" />;
}
