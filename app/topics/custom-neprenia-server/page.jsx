import CustomNepreniaServerKeywordPage, { generateMetadata } from './custom-neprenia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNepreniaServerKeywordPage />;
}
