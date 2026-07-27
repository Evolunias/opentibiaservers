import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-trainers-server-poland');
}

export default function SabrehavenWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-trainers-server-poland" />;
}
