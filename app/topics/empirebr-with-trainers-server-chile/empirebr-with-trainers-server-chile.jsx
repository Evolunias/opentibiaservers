import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-trainers-server-chile');
}

export default function EmpirebrWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-trainers-server-chile" />;
}
