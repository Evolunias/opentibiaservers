import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-trainers-server-france');
}

export default function LumineraWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-trainers-server-france" />;
}
