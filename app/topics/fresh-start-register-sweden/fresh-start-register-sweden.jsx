import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-register-sweden');
}

export default function FreshStartRegisterSwedenKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-register-sweden" />;
}
