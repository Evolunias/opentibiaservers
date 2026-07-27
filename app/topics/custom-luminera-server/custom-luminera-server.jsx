import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-luminera-server');
}

export default function CustomLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="custom-luminera-server" />;
}
