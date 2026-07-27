import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eldera-official');
}

export default function ActiveElderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-eldera-official" />;
}
