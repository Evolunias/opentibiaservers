import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-unline-client');
}

export default function CustomUnlineClientKeywordPage() {
  return <StaticKeywordPage slug="custom-unline-client" />;
}
