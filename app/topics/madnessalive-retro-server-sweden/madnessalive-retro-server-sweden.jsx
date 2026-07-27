import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-retro-server-sweden');
}

export default function MadnessaliveRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-retro-server-sweden" />;
}
