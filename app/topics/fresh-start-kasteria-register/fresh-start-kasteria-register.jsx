import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-kasteria-register');
}

export default function FreshStartKasteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-kasteria-register" />;
}
