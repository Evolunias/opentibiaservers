import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-14-retro-server');
}

export default function Neprenia14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-14-retro-server" />;
}
