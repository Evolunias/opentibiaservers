import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-10-0-retro-server');
}

export default function Classicus100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-10-0-retro-server" />;
}
