import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-1-with-trainers-server');
}

export default function Luminera71WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-1-with-trainers-server" />;
}
