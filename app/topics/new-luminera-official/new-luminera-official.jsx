import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-luminera-official');
}

export default function NewLumineraOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-luminera-official" />;
}
