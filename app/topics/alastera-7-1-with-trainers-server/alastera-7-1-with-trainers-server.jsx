import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-1-with-trainers-server');
}

export default function Alastera71WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-1-with-trainers-server" />;
}
