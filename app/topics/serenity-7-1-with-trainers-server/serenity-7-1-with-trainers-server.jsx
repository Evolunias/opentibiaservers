import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-1-with-trainers-server');
}

export default function Serenity71WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-1-with-trainers-server" />;
}
