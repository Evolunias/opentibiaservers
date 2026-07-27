import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-1-with-trainers-server');
}

export default function Alastera81WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-1-with-trainers-server" />;
}
