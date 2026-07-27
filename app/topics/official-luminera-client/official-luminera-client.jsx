import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-luminera-client');
}

export default function OfficialLumineraClientKeywordPage() {
  return <StaticKeywordPage slug="official-luminera-client" />;
}
