import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-retro-server-uk');
}

export default function MediviaRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="medivia-retro-server-uk" />;
}
