import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-neprenia-register');
}

export default function TopNepreniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-neprenia-register" />;
}
