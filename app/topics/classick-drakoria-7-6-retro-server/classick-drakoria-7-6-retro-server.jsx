import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-6-retro-server');
}

export default function ClassickDrakoria76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-6-retro-server" />;
}
