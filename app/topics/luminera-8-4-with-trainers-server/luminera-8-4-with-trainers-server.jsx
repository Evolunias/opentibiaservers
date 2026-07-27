import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-4-with-trainers-server');
}

export default function Luminera84WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-4-with-trainers-server" />;
}
