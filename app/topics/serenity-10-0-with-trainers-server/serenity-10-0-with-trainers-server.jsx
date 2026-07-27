import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-10-0-with-trainers-server');
}

export default function Serenity100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-10-0-with-trainers-server" />;
}
