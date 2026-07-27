import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-high-exp-server-brazil');
}

export default function SabrehavenHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-high-exp-server-brazil" />;
}
