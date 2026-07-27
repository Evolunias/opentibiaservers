import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-status');
}

export default function InfernalOtStatusKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-status" />;
}
