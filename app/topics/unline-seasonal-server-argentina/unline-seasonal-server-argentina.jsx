import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-seasonal-server-argentina');
}

export default function UnlineSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="unline-seasonal-server-argentina" />;
}
