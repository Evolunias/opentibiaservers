import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-6-retro-server');
}

export default function Classicus86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-6-retro-server" />;
}
