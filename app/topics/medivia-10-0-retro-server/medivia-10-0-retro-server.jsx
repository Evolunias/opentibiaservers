import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-0-retro-server');
}

export default function Medivia100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-0-retro-server" />;
}
