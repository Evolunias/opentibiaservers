import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-low-exp-server-germany');
}

export default function SabrehavenLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-low-exp-server-germany" />;
}
