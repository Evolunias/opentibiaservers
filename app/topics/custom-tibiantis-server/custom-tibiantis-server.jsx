import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiantis-server');
}

export default function CustomTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiantis-server" />;
}
