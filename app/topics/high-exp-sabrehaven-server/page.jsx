import HighExpSabrehavenServerKeywordPage, { generateMetadata } from './high-exp-sabrehaven-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpSabrehavenServerKeywordPage />;
}
