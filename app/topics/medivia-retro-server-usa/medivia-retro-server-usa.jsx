import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-retro-server-usa');
}

export default function MediviaRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="medivia-retro-server-usa" />;
}
