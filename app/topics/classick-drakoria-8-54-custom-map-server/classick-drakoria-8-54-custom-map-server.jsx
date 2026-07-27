import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-54-custom-map-server');
}

export default function ClassickDrakoria854CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-54-custom-map-server" />;
}
