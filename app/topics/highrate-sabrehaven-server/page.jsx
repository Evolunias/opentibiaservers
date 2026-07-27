import HighrateSabrehavenServerKeywordPage, { generateMetadata } from './highrate-sabrehaven-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSabrehavenServerKeywordPage />;
}
