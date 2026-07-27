import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-high-exp-server-north-america');
}

export default function SabrehavenHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-high-exp-server-north-america" />;
}
