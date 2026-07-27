import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-usa-servers');
}

export default function MadnessaliveUsaServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-usa-servers" />;
}
