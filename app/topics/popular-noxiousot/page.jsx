import PopularNoxiousotKeywordPage, { generateMetadata } from './popular-noxiousot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNoxiousotKeywordPage />;
}
