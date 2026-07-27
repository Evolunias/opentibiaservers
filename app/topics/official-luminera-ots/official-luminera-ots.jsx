import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-luminera-ots');
}

export default function OfficialLumineraOtsKeywordPage() {
  return <StaticKeywordPage slug="official-luminera-ots" />;
}
