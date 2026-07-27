import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-low-exp-server-north-america');
}

export default function MediviaLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-low-exp-server-north-america" />;
}
