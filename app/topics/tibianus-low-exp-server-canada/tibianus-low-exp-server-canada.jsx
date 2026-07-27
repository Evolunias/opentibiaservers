import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-low-exp-server-canada');
}

export default function TibianusLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-low-exp-server-canada" />;
}
