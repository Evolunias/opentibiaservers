import CustomNepreniaTibiaKeywordPage, { generateMetadata } from './custom-neprenia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNepreniaTibiaKeywordPage />;
}
