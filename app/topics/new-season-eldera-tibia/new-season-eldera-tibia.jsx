import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eldera-tibia');
}

export default function NewSeasonElderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-eldera-tibia" />;
}
