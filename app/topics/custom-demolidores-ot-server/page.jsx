import CustomDemolidoresOtServerKeywordPage, { generateMetadata } from './custom-demolidores-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDemolidoresOtServerKeywordPage />;
}
