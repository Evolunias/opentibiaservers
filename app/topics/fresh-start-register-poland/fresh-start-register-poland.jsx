import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-register-poland');
}

export default function FreshStartRegisterPolandKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-register-poland" />;
}
