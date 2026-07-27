import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-luminera-ot-server');
}

export default function OfficialLumineraOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-luminera-ot-server" />;
}
