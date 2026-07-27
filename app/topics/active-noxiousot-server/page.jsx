import ActiveNoxiousotServerKeywordPage, { generateMetadata } from './active-noxiousot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNoxiousotServerKeywordPage />;
}
