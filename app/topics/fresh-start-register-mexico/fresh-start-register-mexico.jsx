import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-register-mexico');
}

export default function FreshStartRegisterMexicoKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-register-mexico" />;
}
