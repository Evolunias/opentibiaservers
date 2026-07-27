import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-register-argentina');
}

export default function FreshStartRegisterArgentinaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-register-argentina" />;
}
