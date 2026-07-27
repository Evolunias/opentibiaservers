import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nostalther-login');
}

export default function NoResetNostaltherLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nostalther-login" />;
}
