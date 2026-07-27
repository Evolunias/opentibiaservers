import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-9-6-with-trainers-server');
}

export default function Serenity96WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-9-6-with-trainers-server" />;
}
