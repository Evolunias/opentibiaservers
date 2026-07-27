import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-retro-server-uk');
}

export default function BlazeraRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="blazera-retro-server-uk" />;
}
