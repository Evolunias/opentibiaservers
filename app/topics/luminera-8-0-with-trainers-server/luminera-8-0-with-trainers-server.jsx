import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-0-with-trainers-server');
}

export default function Luminera80WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-0-with-trainers-server" />;
}
