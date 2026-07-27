import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-10-0-retro-server');
}

export default function Unline100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="unline-10-0-retro-server" />;
}
