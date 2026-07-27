import CustomTibianusServerKeywordPage, { generateMetadata } from './custom-tibianus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibianusServerKeywordPage />;
}
