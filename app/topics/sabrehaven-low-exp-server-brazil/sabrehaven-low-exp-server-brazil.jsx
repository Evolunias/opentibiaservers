import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-low-exp-server-brazil');
}

export default function SabrehavenLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-low-exp-server-brazil" />;
}
