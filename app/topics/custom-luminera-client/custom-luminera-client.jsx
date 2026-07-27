import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-luminera-client');
}

export default function CustomLumineraClientKeywordPage() {
  return <StaticKeywordPage slug="custom-luminera-client" />;
}
