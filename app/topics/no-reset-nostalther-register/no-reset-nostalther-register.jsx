import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nostalther-register');
}

export default function NoResetNostaltherRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nostalther-register" />;
}
