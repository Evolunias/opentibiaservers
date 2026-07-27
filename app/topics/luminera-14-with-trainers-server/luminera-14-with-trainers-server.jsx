import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-14-with-trainers-server');
}

export default function Luminera14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-14-with-trainers-server" />;
}
