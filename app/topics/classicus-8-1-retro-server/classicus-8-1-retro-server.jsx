import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-1-retro-server');
}

export default function Classicus81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-1-retro-server" />;
}
