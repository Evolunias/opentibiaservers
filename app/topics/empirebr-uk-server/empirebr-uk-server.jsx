import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-uk-server');
}

export default function EmpirebrUkServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-uk-server" />;
}
