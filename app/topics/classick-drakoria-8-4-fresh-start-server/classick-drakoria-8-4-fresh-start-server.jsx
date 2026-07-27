import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-4-fresh-start-server');
}

export default function ClassickDrakoria84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-4-fresh-start-server" />;
}
