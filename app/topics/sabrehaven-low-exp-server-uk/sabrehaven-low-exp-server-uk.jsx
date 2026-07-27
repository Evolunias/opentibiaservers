import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-low-exp-server-uk');
}

export default function SabrehavenLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-low-exp-server-uk" />;
}
