import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-low-exp-server-poland');
}

export default function SabrehavenLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-low-exp-server-poland" />;
}
