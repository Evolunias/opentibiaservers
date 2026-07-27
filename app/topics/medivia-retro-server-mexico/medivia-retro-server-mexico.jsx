import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-retro-server-mexico');
}

export default function MediviaRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="medivia-retro-server-mexico" />;
}
