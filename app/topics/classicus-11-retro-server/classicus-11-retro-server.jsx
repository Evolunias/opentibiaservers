import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-11-retro-server');
}

export default function Classicus11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-11-retro-server" />;
}
