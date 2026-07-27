import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-54-retro-server');
}

export default function Classicus854RetroServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-54-retro-server" />;
}
