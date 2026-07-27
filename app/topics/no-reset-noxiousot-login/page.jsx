import NoResetNoxiousotLoginKeywordPage, { generateMetadata } from './no-reset-noxiousot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNoxiousotLoginKeywordPage />;
}
