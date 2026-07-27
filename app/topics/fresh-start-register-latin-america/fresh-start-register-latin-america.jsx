import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-register-latin-america');
}

export default function FreshStartRegisterLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-register-latin-america" />;
}
