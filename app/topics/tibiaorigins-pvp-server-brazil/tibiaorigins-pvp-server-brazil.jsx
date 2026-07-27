import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvp-server-brazil');
}

export default function TibiaoriginsPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvp-server-brazil" />;
}
