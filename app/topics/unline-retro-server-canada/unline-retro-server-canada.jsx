import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-retro-server-canada');
}

export default function UnlineRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="unline-retro-server-canada" />;
}
