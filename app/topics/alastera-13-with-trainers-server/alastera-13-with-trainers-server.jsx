import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-13-with-trainers-server');
}

export default function Alastera13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-13-with-trainers-server" />;
}
