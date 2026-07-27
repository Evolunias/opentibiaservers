import ActiveNoxiousotKeywordPage, { generateMetadata } from './active-noxiousot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNoxiousotKeywordPage />;
}
