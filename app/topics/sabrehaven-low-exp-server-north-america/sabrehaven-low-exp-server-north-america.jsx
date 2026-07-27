import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-low-exp-server-north-america');
}

export default function SabrehavenLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-low-exp-server-north-america" />;
}
