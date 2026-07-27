import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-madnessalive-ot-server');
}

export default function FreshStartMadnessaliveOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-madnessalive-ot-server" />;
}
