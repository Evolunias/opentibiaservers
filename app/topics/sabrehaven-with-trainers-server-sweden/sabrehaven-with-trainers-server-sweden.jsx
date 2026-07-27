import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-trainers-server-sweden');
}

export default function SabrehavenWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-trainers-server-sweden" />;
}
