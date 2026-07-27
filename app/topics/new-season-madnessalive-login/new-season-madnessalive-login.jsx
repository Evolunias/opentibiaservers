import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-madnessalive-login');
}

export default function NewSeasonMadnessaliveLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-madnessalive-login" />;
}
