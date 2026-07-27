import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-luminera-official');
}

export default function FreshStartLumineraOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-luminera-official" />;
}
