import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-10-98-retro-server');
}

export default function Unline1098RetroServerKeywordPage() {
  return <StaticKeywordPage slug="unline-10-98-retro-server" />;
}
