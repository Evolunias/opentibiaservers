import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-4-no-reset-server');
}

export default function Shadowcores84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-4-no-reset-server" />;
}
