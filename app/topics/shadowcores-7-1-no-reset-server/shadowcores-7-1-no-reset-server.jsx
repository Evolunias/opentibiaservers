import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-1-no-reset-server');
}

export default function Shadowcores71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-1-no-reset-server" />;
}
