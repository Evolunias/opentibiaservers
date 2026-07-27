import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-official');
}

export default function LumineraOfficialKeywordPage() {
  return <StaticKeywordPage slug="luminera-official" />;
}
