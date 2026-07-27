import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-kasteria-register');
}

export default function NewKasteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-kasteria-register" />;
}
