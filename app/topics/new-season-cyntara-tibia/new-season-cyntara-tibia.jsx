import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-cyntara-tibia');
}

export default function NewSeasonCyntaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-cyntara-tibia" />;
}
