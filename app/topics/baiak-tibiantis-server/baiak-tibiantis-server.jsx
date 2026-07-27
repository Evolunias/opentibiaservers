import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-tibiantis-server');
}

export default function BaiakTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-tibiantis-server" />;
}
