import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-register');
}

export default function NepreniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="neprenia-register" />;
}
