import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-luminera-official');
}

export default function BestLumineraOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-luminera-official" />;
}
