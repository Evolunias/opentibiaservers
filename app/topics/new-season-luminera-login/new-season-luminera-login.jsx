import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-luminera-login');
}

export default function NewSeasonLumineraLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-luminera-login" />;
}
