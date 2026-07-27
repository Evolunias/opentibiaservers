import NewSabrehavenServerKeywordPage, { generateMetadata } from './new-sabrehaven-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSabrehavenServerKeywordPage />;
}
