import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-chile-server');
}

export default function MadnessaliveChileServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-chile-server" />;
}
