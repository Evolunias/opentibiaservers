import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-retro-server-europe');
}

export default function MediviaRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="medivia-retro-server-europe" />;
}
