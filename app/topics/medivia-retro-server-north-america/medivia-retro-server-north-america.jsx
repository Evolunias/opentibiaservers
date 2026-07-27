import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-retro-server-north-america');
}

export default function MediviaRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-retro-server-north-america" />;
}
