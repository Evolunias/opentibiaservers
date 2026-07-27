import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-fresh-start-server-argentina');
}

export default function BlazeraFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="blazera-fresh-start-server-argentina" />;
}
