import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eldera-official');
}

export default function CustomElderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-eldera-official" />;
}
