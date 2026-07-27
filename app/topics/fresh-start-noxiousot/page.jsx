import FreshStartNoxiousotKeywordPage, { generateMetadata } from './fresh-start-noxiousot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNoxiousotKeywordPage />;
}
