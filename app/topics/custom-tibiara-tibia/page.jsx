import CustomTibiaraTibiaKeywordPage, { generateMetadata } from './custom-tibiara-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaraTibiaKeywordPage />;
}
