import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-coxaot-client');
}

export default function OfficialCoxaotClientKeywordPage() {
  return <StaticKeywordPage slug="official-coxaot-client" />;
}
