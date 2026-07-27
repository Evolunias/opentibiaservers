import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-13-with-trainers-server');
}

export default function Serenity13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-13-with-trainers-server" />;
}
