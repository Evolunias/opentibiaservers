import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-low-exp-server-latin-america');
}

export default function OriginaltibiaLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-low-exp-server-latin-america" />;
}
