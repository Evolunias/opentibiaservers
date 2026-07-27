import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-trainers-server-europe');
}

export default function CoxaotWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-trainers-server-europe" />;
}
