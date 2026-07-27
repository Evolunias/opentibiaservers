import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-luminera-ot');
}

export default function OfficialLumineraOtKeywordPage() {
  return <StaticKeywordPage slug="official-luminera-ot" />;
}
