import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-9-6-with-trainers-server');
}

export default function Luminera96WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-9-6-with-trainers-server" />;
}
