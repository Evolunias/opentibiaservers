import CustomNostaltherOtsKeywordPage, { generateMetadata } from './custom-nostalther-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNostaltherOtsKeywordPage />;
}
