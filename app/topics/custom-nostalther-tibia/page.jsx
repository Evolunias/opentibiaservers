import CustomNostaltherTibiaKeywordPage, { generateMetadata } from './custom-nostalther-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNostaltherTibiaKeywordPage />;
}
