import CustomMapNepreniaServerKeywordPage, { generateMetadata } from './custom-map-neprenia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapNepreniaServerKeywordPage />;
}
