import ActiveTibiantisGuideKeywordPage, { generateMetadata } from './active-tibiantis-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiantisGuideKeywordPage />;
}
