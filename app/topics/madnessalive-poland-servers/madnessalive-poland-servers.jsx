import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-poland-servers');
}

export default function MadnessalivePolandServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-poland-servers" />;
}
