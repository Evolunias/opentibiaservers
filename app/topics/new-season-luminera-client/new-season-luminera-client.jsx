import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-luminera-client');
}

export default function NewSeasonLumineraClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-luminera-client" />;
}
