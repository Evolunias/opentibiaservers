import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-madnessalive-client');
}

export default function NewMadnessaliveClientKeywordPage() {
  return <StaticKeywordPage slug="new-madnessalive-client" />;
}
