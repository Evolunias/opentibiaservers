import CustomNostaltherKeywordPage, { generateMetadata } from './custom-nostalther';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNostaltherKeywordPage />;
}
