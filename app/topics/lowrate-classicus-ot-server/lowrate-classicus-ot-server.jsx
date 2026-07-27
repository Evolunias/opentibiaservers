import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classicus-ot-server');
}

export default function LowrateClassicusOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classicus-ot-server" />;
}
