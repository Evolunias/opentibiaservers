import CustomSabrehavenPrivateServerKeywordPage, { generateMetadata } from './custom-sabrehaven-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSabrehavenPrivateServerKeywordPage />;
}
