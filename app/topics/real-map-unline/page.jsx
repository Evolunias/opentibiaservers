import RealMapUnlineKeywordPage, { generateMetadata } from './real-map-unline';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapUnlineKeywordPage />;
}
