import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiantis-server');
}

export default function ActiveTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="active-tibiantis-server" />;
}
