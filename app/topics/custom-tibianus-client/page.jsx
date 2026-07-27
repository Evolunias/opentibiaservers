import CustomTibianusClientKeywordPage, { generateMetadata } from './custom-tibianus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibianusClientKeywordPage />;
}
