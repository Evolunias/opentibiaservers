import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-retro-server-south-america');
}

export default function MadnessaliveRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-retro-server-south-america" />;
}
