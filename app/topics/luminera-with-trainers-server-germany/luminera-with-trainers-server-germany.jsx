import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-trainers-server-germany');
}

export default function LumineraWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-trainers-server-germany" />;
}
