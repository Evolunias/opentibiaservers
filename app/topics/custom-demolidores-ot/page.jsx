import CustomDemolidoresOtKeywordPage, { generateMetadata } from './custom-demolidores-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDemolidoresOtKeywordPage />;
}
