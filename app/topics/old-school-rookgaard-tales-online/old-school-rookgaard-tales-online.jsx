import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rookgaard-tales-online');
}

export default function OldSchoolRookgaardTalesOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-rookgaard-tales-online" />;
}
