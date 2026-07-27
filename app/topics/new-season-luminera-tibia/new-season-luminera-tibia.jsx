import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-luminera-tibia');
}

export default function NewSeasonLumineraTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-luminera-tibia" />;
}
