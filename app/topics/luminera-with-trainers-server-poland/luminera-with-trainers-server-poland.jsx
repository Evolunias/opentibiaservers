import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-trainers-server-poland');
}

export default function LumineraWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-trainers-server-poland" />;
}
