import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nostalther-official');
}

export default function NoResetNostaltherOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nostalther-official" />;
}
