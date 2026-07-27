import CustomOlderaOtServerKeywordPage, { generateMetadata } from './custom-oldera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOlderaOtServerKeywordPage />;
}
