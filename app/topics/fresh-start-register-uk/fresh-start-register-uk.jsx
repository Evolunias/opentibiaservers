import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-register-uk');
}

export default function FreshStartRegisterUkKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-register-uk" />;
}
