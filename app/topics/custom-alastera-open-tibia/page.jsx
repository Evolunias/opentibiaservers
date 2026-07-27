import CustomAlasteraOpenTibiaKeywordPage, { generateMetadata } from './custom-alastera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAlasteraOpenTibiaKeywordPage />;
}
