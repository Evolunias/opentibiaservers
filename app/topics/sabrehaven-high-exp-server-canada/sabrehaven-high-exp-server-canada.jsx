import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-high-exp-server-canada');
}

export default function SabrehavenHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-high-exp-server-canada" />;
}
