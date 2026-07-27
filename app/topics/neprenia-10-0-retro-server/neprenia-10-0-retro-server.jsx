import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-0-retro-server');
}

export default function Neprenia100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-0-retro-server" />;
}
