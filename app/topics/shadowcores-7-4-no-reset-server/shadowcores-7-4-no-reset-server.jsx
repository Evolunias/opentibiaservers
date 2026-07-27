import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-4-no-reset-server');
}

export default function Shadowcores74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-4-no-reset-server" />;
}
