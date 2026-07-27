import CustomNostaltherGuideKeywordPage, { generateMetadata } from './custom-nostalther-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNostaltherGuideKeywordPage />;
}
