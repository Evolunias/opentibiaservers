import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-register-germany');
}

export default function FreshStartRegisterGermanyKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-register-germany" />;
}
