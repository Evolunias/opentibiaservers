import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-south-america-servers');
}

export default function InfernalOtSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-south-america-servers" />;
}
