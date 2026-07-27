import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-register-usa');
}

export default function FreshStartRegisterUsaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-register-usa" />;
}
