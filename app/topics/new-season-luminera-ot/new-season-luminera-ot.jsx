import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-luminera-ot');
}

export default function NewSeasonLumineraOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-luminera-ot" />;
}
