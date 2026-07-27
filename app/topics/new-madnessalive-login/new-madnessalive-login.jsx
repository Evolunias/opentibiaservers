import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-madnessalive-login');
}

export default function NewMadnessaliveLoginKeywordPage() {
  return <StaticKeywordPage slug="new-madnessalive-login" />;
}
