import CustomClassicusTibiaKeywordPage, { generateMetadata } from './custom-classicus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomClassicusTibiaKeywordPage />;
}
