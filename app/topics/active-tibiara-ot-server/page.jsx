import ActiveTibiaraOtServerKeywordPage, { generateMetadata } from './active-tibiara-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaraOtServerKeywordPage />;
}
