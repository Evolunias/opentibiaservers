import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eldera-official');
}

export default function NoResetElderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eldera-official" />;
}
