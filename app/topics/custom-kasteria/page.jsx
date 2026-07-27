import CustomKasteriaKeywordPage, { generateMetadata } from './custom-kasteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomKasteriaKeywordPage />;
}
