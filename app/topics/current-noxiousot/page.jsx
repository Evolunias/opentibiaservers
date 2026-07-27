import CurrentNoxiousotKeywordPage, { generateMetadata } from './current-noxiousot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNoxiousotKeywordPage />;
}
