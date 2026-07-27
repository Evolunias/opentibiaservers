import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-15-retro-server');
}

export default function Classicus15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-15-retro-server" />;
}
