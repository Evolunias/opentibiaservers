import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-luminera-official');
}

export default function TopLumineraOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-luminera-official" />;
}
