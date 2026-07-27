import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-fun-server');
}

export default function BlazeraFunServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-fun-server" />;
}
