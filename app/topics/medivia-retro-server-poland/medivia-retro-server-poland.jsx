import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-retro-server-poland');
}

export default function MediviaRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="medivia-retro-server-poland" />;
}
