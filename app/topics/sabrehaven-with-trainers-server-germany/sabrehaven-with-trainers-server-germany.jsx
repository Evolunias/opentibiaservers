import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-trainers-server-germany');
}

export default function SabrehavenWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-trainers-server-germany" />;
}
