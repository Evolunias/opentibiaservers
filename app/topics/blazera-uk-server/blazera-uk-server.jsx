import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-uk-server');
}

export default function BlazeraUkServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-uk-server" />;
}
