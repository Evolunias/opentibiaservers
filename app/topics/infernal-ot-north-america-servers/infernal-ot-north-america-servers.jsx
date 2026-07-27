import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-north-america-servers');
}

export default function InfernalOtNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-north-america-servers" />;
}
