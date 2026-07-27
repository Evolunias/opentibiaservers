import CustomTibiantisClientKeywordPage, { generateMetadata } from './custom-tibiantis-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiantisClientKeywordPage />;
}
