import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-low-exp-server-north-america');
}

export default function RealeraLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-low-exp-server-north-america" />;
}
