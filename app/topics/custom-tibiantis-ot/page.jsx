import CustomTibiantisOtKeywordPage, { generateMetadata } from './custom-tibiantis-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiantisOtKeywordPage />;
}
