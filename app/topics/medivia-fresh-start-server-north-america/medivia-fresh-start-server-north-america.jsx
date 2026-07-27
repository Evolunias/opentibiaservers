import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-fresh-start-server-north-america');
}

export default function MediviaFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-fresh-start-server-north-america" />;
}
