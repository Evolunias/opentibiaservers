import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-luminera-client');
}

export default function ActiveLumineraClientKeywordPage() {
  return <StaticKeywordPage slug="active-luminera-client" />;
}
