import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-trainers-server-chile');
}

export default function CoxaotWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-trainers-server-chile" />;
}
