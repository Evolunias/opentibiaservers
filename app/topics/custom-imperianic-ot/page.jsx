import CustomImperianicOtKeywordPage, { generateMetadata } from './custom-imperianic-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomImperianicOtKeywordPage />;
}
