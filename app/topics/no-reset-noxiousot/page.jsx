import NoResetNoxiousotKeywordPage, { generateMetadata } from './no-reset-noxiousot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNoxiousotKeywordPage />;
}
