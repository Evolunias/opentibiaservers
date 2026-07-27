import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-14-with-trainers-server');
}

export default function Alastera14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-14-with-trainers-server" />;
}
