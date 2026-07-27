import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-register-brazil');
}

export default function FreshStartRegisterBrazilKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-register-brazil" />;
}
