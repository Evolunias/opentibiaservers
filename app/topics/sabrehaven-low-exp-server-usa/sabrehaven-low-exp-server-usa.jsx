import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-low-exp-server-usa');
}

export default function SabrehavenLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-low-exp-server-usa" />;
}
