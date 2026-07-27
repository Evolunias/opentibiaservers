import ActiveTibiantisOtsKeywordPage, { generateMetadata } from './active-tibiantis-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiantisOtsKeywordPage />;
}
