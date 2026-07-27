import CustomUnlineKeywordPage, { generateMetadata } from './custom-unline';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomUnlineKeywordPage />;
}
