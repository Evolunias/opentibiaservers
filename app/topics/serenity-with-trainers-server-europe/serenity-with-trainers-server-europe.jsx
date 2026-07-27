import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-trainers-server-europe');
}

export default function SerenityWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-trainers-server-europe" />;
}
