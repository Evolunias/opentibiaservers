import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eldera-official');
}

export default function LowrateElderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eldera-official" />;
}
