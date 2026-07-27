import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-15-retro-server');
}

export default function Unline15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="unline-15-retro-server" />;
}
