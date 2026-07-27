import ActiveKasteriaOtServerKeywordPage, { generateMetadata } from './active-kasteria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveKasteriaOtServerKeywordPage />;
}
