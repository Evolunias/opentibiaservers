import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-luminera-server');
}

export default function ActiveLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="active-luminera-server" />;
}
