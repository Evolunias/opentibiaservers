import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-4-retro-server');
}

export default function Classicus84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-4-retro-server" />;
}
