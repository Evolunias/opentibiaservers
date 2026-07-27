import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-luminera-server');
}

export default function OfficialLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="official-luminera-server" />;
}
