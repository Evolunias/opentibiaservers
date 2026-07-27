import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-15-with-trainers-server');
}

export default function Serenity15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-15-with-trainers-server" />;
}
