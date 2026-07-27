import PvpeOtServerUsaKeywordPage, { generateMetadata } from './pvpe-ot-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeOtServerUsaKeywordPage />;
}
