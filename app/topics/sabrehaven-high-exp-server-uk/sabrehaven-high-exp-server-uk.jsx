import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-high-exp-server-uk');
}

export default function SabrehavenHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-high-exp-server-uk" />;
}
