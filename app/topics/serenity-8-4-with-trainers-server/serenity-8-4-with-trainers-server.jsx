import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-4-with-trainers-server');
}

export default function Serenity84WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-4-with-trainers-server" />;
}
