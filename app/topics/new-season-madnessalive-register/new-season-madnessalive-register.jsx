import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-madnessalive-register');
}

export default function NewSeasonMadnessaliveRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-madnessalive-register" />;
}
