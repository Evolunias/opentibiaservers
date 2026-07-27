import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-11-no-reset-server');
}

export default function Shadowcores11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-11-no-reset-server" />;
}
