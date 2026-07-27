import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven');
}

export default function SabrehavenKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven" />;
}
