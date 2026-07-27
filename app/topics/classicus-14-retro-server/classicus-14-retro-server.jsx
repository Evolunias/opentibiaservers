import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-14-retro-server');
}

export default function Classicus14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-14-retro-server" />;
}
