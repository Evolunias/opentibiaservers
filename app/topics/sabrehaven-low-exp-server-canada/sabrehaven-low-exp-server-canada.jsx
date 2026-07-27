import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-low-exp-server-canada');
}

export default function SabrehavenLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-low-exp-server-canada" />;
}
