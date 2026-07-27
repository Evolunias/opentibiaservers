import CustomTibiantisTibiaKeywordPage, { generateMetadata } from './custom-tibiantis-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiantisTibiaKeywordPage />;
}
