import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-trainers-server-argentina');
}

export default function SabrehavenWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-trainers-server-argentina" />;
}
