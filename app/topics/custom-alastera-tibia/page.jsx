import CustomAlasteraTibiaKeywordPage, { generateMetadata } from './custom-alastera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAlasteraTibiaKeywordPage />;
}
