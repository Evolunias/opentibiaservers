import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-low-exp-server-north-america');
}

export default function TibianusLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-low-exp-server-north-america" />;
}
