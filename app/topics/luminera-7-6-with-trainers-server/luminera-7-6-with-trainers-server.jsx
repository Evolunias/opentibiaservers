import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-6-with-trainers-server');
}

export default function Luminera76WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-6-with-trainers-server" />;
}
