import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-12-with-trainers-server');
}

export default function Saintsot12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-12-with-trainers-server" />;
}
