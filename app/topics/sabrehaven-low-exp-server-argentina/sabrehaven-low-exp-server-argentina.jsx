import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-low-exp-server-argentina');
}

export default function SabrehavenLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-low-exp-server-argentina" />;
}
