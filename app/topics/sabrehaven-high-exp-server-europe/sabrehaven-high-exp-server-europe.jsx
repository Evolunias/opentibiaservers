import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-high-exp-server-europe');
}

export default function SabrehavenHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-high-exp-server-europe" />;
}
