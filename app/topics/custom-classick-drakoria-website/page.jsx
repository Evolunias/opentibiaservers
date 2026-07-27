import CustomClassickDrakoriaWebsiteKeywordPage, { generateMetadata } from './custom-classick-drakoria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomClassickDrakoriaWebsiteKeywordPage />;
}
