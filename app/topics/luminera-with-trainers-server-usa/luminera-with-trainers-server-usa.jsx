import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-trainers-server-usa');
}

export default function LumineraWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-trainers-server-usa" />;
}
