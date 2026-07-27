import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-low-exp-server-usa');
}

export default function TibianusLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-low-exp-server-usa" />;
}
