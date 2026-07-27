import ActiveImperianicOtServerKeywordPage, { generateMetadata } from './active-imperianic-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveImperianicOtServerKeywordPage />;
}
