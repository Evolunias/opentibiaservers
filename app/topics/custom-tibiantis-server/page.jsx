import CustomTibiantisServerKeywordPage, { generateMetadata } from './custom-tibiantis-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiantisServerKeywordPage />;
}
