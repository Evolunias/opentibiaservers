import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-client');
}

export default function UnlineClientKeywordPage() {
  return <StaticKeywordPage slug="unline-client" />;
}
