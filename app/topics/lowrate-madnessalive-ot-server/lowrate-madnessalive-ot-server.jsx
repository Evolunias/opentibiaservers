import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-madnessalive-ot-server');
}

export default function LowrateMadnessaliveOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-madnessalive-ot-server" />;
}
