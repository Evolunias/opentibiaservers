import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-luminera-official');
}

export default function ActiveLumineraOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-luminera-official" />;
}
