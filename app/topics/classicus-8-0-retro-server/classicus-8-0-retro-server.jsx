import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-0-retro-server');
}

export default function Classicus80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-0-retro-server" />;
}
