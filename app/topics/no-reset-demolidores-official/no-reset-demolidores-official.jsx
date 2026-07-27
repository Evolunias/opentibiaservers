import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-demolidores-official');
}

export default function NoResetDemolidoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-demolidores-official" />;
}
