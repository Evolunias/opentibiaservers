import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-madnessalive-open-tibia');
}

export default function NewMadnessaliveOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-madnessalive-open-tibia" />;
}
