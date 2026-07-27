import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-low-exp-server-north-america');
}

export default function LumineraLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-low-exp-server-north-america" />;
}
