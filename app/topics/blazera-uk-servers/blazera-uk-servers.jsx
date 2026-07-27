import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-uk-servers');
}

export default function BlazeraUkServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-uk-servers" />;
}
