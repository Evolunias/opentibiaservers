import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-retro-server-canada');
}

export default function MediviaRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="medivia-retro-server-canada" />;
}
