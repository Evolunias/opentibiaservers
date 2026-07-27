import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-13-with-trainers-server');
}

export default function Luminera13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-13-with-trainers-server" />;
}
