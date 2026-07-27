import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-14-with-trainers-server');
}

export default function Serenity14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-14-with-trainers-server" />;
}
