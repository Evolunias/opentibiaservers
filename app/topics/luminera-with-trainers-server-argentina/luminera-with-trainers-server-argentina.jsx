import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-trainers-server-argentina');
}

export default function LumineraWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-trainers-server-argentina" />;
}
