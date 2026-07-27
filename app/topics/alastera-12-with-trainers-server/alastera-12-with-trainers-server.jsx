import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-12-with-trainers-server');
}

export default function Alastera12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-12-with-trainers-server" />;
}
