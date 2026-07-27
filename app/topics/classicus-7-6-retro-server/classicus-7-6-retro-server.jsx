import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-6-retro-server');
}

export default function Classicus76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-6-retro-server" />;
}
