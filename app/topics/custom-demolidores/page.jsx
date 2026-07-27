import CustomDemolidoresKeywordPage, { generateMetadata } from './custom-demolidores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDemolidoresKeywordPage />;
}
