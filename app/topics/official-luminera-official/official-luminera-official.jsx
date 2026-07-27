import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-luminera-official');
}

export default function OfficialLumineraOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-luminera-official" />;
}
