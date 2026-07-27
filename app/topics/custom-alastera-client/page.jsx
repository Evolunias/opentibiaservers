import CustomAlasteraClientKeywordPage, { generateMetadata } from './custom-alastera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAlasteraClientKeywordPage />;
}
