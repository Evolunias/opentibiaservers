import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-trainers-server-south-america');
}

export default function SabrehavenWithTrainersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-trainers-server-south-america" />;
}
