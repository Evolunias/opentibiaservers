import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-neprenia-register');
}

export default function CurrentNepreniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-neprenia-register" />;
}
