import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-12-retro-server');
}

export default function Classicus12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-12-retro-server" />;
}
