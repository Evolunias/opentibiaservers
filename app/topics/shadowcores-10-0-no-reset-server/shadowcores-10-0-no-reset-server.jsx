import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-10-0-no-reset-server');
}

export default function Shadowcores100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-10-0-no-reset-server" />;
}
