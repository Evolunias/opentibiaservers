import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-0-with-trainers-server');
}

export default function Alastera100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-0-with-trainers-server" />;
}
