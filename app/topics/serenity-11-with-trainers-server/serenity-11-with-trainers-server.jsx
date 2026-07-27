import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-11-with-trainers-server');
}

export default function Serenity11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-11-with-trainers-server" />;
}
