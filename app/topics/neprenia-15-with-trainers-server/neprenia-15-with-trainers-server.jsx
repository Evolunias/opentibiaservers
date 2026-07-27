import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-15-with-trainers-server');
}

export default function Neprenia15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-15-with-trainers-server" />;
}
