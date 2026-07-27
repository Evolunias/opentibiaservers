import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-9-6-retro-server');
}

export default function Classicus96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-9-6-retro-server" />;
}
