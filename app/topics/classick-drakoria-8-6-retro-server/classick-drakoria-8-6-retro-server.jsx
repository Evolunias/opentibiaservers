import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-6-retro-server');
}

export default function ClassickDrakoria86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-6-retro-server" />;
}
