import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-with-trainers-server-sweden');
}

export default function MistOfDeathWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-with-trainers-server-sweden" />;
}
