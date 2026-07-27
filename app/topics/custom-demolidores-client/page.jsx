import CustomDemolidoresClientKeywordPage, { generateMetadata } from './custom-demolidores-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDemolidoresClientKeywordPage />;
}
