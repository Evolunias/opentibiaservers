import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eldera-official');
}

export default function CurrentElderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-eldera-official" />;
}
