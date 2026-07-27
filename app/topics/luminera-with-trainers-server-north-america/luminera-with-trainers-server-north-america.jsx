import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-trainers-server-north-america');
}

export default function LumineraWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-trainers-server-north-america" />;
}
