import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-8-1-old-school-server');
}

export default function BaiakIlusion81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-8-1-old-school-server" />;
}
