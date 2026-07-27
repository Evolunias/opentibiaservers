import ActiveTibiantisOtKeywordPage, { generateMetadata } from './active-tibiantis-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiantisOtKeywordPage />;
}
