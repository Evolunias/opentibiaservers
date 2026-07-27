import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-usa-server');
}

export default function MadnessaliveUsaServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-usa-server" />;
}
