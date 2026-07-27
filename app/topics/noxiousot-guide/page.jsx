import NoxiousotGuideKeywordPage, { generateMetadata } from './noxiousot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotGuideKeywordPage />;
}
