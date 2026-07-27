import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-client-france');
}

export default function LowExpClientFranceKeywordPage() {
  return <StaticKeywordPage slug="low-exp-client-france" />;
}
