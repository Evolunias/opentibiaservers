import CustomUnlineClientKeywordPage, { generateMetadata } from './custom-unline-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomUnlineClientKeywordPage />;
}
