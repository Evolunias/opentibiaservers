import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-high-exp-server-usa');
}

export default function SabrehavenHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-high-exp-server-usa" />;
}
