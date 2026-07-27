import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibianus-client');
}

export default function CustomTibianusClientKeywordPage() {
  return <StaticKeywordPage slug="custom-tibianus-client" />;
}
