import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibianus-client');
}

export default function ActiveTibianusClientKeywordPage() {
  return <StaticKeywordPage slug="active-tibianus-client" />;
}
