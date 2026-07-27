import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-unline-client');
}

export default function ActiveUnlineClientKeywordPage() {
  return <StaticKeywordPage slug="active-unline-client" />;
}
