import CustomTibiantisOpenTibiaKeywordPage, { generateMetadata } from './custom-tibiantis-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiantisOpenTibiaKeywordPage />;
}
