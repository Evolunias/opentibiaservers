import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-register-europe');
}

export default function FreshStartRegisterEuropeKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-register-europe" />;
}
