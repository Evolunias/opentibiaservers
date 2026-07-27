import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-france-servers');
}

export default function BlazeraFranceServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-france-servers" />;
}
