import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-madnessalive-ot-server');
}

export default function NewMadnessaliveOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-madnessalive-ot-server" />;
}
