import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-trainers-server-mexico');
}

export default function LumineraWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-trainers-server-mexico" />;
}
