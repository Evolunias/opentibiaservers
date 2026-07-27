import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-mist-of-death-server');
}

export default function WithActivePlayersMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-mist-of-death-server" />;
}
