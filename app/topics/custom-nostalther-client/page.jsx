import CustomNostaltherClientKeywordPage, { generateMetadata } from './custom-nostalther-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNostaltherClientKeywordPage />;
}
