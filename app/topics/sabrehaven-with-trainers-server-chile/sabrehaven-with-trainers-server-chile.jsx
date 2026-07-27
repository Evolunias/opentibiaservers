import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-trainers-server-chile');
}

export default function SabrehavenWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-trainers-server-chile" />;
}
