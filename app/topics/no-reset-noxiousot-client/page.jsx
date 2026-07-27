import NoResetNoxiousotClientKeywordPage, { generateMetadata } from './no-reset-noxiousot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNoxiousotClientKeywordPage />;
}
