import NoResetNoxiousotServerKeywordPage, { generateMetadata } from './no-reset-noxiousot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNoxiousotServerKeywordPage />;
}
