import CustomDemolidoresLoginKeywordPage, { generateMetadata } from './custom-demolidores-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDemolidoresLoginKeywordPage />;
}
