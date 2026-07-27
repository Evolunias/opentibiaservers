import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-13-no-reset-server');
}

export default function Shadowcores13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-13-no-reset-server" />;
}
