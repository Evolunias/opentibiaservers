import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-trainers-server-brazil');
}

export default function TibianusWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-trainers-server-brazil" />;
}
