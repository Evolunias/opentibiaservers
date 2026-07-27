import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-54-no-reset-server');
}

export default function Shadowcores854NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-54-no-reset-server" />;
}
