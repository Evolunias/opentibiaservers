import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-13-with-trainers-server');
}

export default function Saintsot13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-13-with-trainers-server" />;
}
