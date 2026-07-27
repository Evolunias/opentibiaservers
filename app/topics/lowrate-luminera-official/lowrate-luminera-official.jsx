import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-luminera-official');
}

export default function LowrateLumineraOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-luminera-official" />;
}
