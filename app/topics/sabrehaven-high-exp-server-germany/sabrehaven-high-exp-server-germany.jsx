import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-high-exp-server-germany');
}

export default function SabrehavenHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-high-exp-server-germany" />;
}
