import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('samera-open-pvp');
}

export default function SameraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="samera-open-pvp" />;
}
