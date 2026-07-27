import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-trainers-server-brazil');
}

export default function LumineraWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-trainers-server-brazil" />;
}
