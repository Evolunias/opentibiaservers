import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-0-with-trainers-server');
}

export default function Alastera80WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-0-with-trainers-server" />;
}
