import CustomSabrehavenOtsKeywordPage, { generateMetadata } from './custom-sabrehaven-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSabrehavenOtsKeywordPage />;
}
