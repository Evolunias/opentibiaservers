import CustomNepreniaKeywordPage, { generateMetadata } from './custom-neprenia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNepreniaKeywordPage />;
}
