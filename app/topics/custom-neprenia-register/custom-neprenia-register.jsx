import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-neprenia-register');
}

export default function CustomNepreniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-neprenia-register" />;
}
