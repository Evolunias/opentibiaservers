import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-1-retro-server');
}

export default function ClassickDrakoria81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-1-retro-server" />;
}
