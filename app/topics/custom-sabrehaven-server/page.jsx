import CustomSabrehavenServerKeywordPage, { generateMetadata } from './custom-sabrehaven-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSabrehavenServerKeywordPage />;
}
