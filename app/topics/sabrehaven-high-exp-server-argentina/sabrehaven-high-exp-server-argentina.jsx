import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-high-exp-server-argentina');
}

export default function SabrehavenHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-high-exp-server-argentina" />;
}
