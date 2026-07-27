import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-12-with-trainers-server');
}

export default function Luminera12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-12-with-trainers-server" />;
}
