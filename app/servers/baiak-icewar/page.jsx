import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

import BaiakIcewarWikiPage from '@/app/components/BaiakIcewarWikiPage';
import { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("baiak-icewar");
}

export default function Page() {
  return <BaiakIcewarWikiPage />;
}
