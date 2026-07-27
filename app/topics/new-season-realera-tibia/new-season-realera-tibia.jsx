import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realera-tibia');
}

export default function NewSeasonRealeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-realera-tibia" />;
}
