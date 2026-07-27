import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('samera-optional-pvp');
}

export default function SameraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="samera-optional-pvp" />;
}
