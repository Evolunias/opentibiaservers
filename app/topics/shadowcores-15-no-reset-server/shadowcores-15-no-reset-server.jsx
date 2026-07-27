import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-15-no-reset-server');
}

export default function Shadowcores15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-15-no-reset-server" />;
}
