import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-blazera-server');
}

export default function WithActivePlayersBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-blazera-server" />;
}
