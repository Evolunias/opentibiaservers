import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-ot-server');
}

export default function MadnessaliveOtServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-ot-server" />;
}
