import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-14-no-reset-server');
}

export default function Shadowcores14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-14-no-reset-server" />;
}
