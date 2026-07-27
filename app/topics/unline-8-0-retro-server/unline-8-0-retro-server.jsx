import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-0-retro-server');
}

export default function Unline80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-0-retro-server" />;
}
