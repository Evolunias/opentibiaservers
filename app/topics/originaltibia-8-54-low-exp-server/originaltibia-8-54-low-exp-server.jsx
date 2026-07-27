import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-54-low-exp-server');
}

export default function Originaltibia854LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-54-low-exp-server" />;
}
