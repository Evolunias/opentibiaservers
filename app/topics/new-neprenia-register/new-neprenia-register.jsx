import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-neprenia-register');
}

export default function NewNepreniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-neprenia-register" />;
}
