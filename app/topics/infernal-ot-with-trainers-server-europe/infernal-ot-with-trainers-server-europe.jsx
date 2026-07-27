import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-with-trainers-server-europe');
}

export default function InfernalOtWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-with-trainers-server-europe" />;
}
