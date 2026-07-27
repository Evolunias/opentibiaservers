import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-72-retro-server');
}

export default function Classicus772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-72-retro-server" />;
}
