import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-98-with-trainers-server');
}

export default function Alastera1098WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-98-with-trainers-server" />;
}
