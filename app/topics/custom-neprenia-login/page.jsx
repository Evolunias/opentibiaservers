import CustomNepreniaLoginKeywordPage, { generateMetadata } from './custom-neprenia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNepreniaLoginKeywordPage />;
}
