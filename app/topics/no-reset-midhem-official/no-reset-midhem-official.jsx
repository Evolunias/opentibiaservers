import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-midhem-official');
}

export default function NoResetMidhemOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-midhem-official" />;
}
