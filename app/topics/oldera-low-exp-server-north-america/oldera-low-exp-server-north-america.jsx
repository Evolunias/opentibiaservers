import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-low-exp-server-north-america');
}

export default function OlderaLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-low-exp-server-north-america" />;
}
