import CustomSabrehavenTibiaKeywordPage, { generateMetadata } from './custom-sabrehaven-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSabrehavenTibiaKeywordPage />;
}
