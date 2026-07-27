import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-15-retro-server');
}

export default function Neprenia15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-15-retro-server" />;
}
