import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-retro-server-north-america');
}

export default function UnlineRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-retro-server-north-america" />;
}
