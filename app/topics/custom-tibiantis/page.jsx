import CustomTibiantisKeywordPage, { generateMetadata } from './custom-tibiantis';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiantisKeywordPage />;
}
