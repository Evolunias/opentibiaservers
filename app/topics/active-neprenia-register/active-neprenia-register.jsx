import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-neprenia-register');
}

export default function ActiveNepreniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-neprenia-register" />;
}
