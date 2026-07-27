import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-0-with-trainers-server');
}

export default function Serenity80WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-0-with-trainers-server" />;
}
