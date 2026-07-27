import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-luminera-official');
}

export default function CurrentLumineraOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-luminera-official" />;
}
