import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-15-with-trainers-server');
}

export default function Luminera15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-15-with-trainers-server" />;
}
