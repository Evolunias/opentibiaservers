import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-luminera-official');
}

export default function PopularLumineraOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-luminera-official" />;
}
