import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-low-exp-server-europe');
}

export default function SabrehavenLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-low-exp-server-europe" />;
}
