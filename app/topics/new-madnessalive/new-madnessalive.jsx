import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-madnessalive');
}

export default function NewMadnessaliveKeywordPage() {
  return <StaticKeywordPage slug="new-madnessalive" />;
}
