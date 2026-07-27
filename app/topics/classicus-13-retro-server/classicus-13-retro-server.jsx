import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-13-retro-server');
}

export default function Classicus13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-13-retro-server" />;
}
