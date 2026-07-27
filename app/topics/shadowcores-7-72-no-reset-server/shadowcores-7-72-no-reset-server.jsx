import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-72-no-reset-server');
}

export default function Shadowcores772NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-72-no-reset-server" />;
}
